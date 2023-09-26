<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:create-user',
    description: 'Create a new user',
)]
class CreateUserCommand extends Command
{
    private EntityManagerInterface $entityManager;
    private UserPasswordHasherInterface $passwordHasher;

    public function __construct(
        EntityManagerInterface $entityManager,
        UserPasswordHasherInterface $passwordHasher
    )
    {
        parent::__construct();
        $this->entityManager = $entityManager;
        $this->passwordHasher = $passwordHasher;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $io->title('User Creation');

        $username = $io->ask('Enter username:', null, function ($value) {
            if (empty($value)) {
                throw new \RuntimeException('Username cannot be empty.');
            }
            return $value;
        });

        $password = $io->askHidden('Enter password:', function ($value) {
            if (empty($value)) {
                throw new \RuntimeException('Password cannot be empty.');
            }
            return $value;
        });

        // Check if the user with this username already exists
        $existingUser = $this->entityManager->getRepository(User::class)->findOneBy(['username' => $username]);

        if ($existingUser) {
            $io->error('A user with this username already exists.');

            return Command::FAILURE;
        }

        // Create a new User entity
        $user = new User();
        $user->setUsername($username);

        // Hash the password before storing it
        $hashedPassword = $this->passwordHasher->hashPassword($user, $password);
        $user->setPassword($hashedPassword);

        $user->setRoles(['ROLE_CUSTOMER']);

        // Persist the user to the database
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $io->success('User successfully created.');

        return Command::SUCCESS;
    }
}
