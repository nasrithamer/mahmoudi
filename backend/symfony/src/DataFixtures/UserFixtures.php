<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    public function __construct(private UserPasswordHasherInterface $passwordHasher)
    {
    }

    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $username = "demo";
        $password = "demo";

        $hashedPassword = $this->passwordHasher->hashPassword($user, $password);
        $user->setUsername($username);
        $user->setPassword($hashedPassword);
        $user->setRoles([User::ROLE_CUSTOMER]);

        $manager->persist($user);
        $manager->flush();
    }
}
