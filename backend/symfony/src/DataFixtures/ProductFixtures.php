<?php

namespace App\DataFixtures;

use App\Entity\Product;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker;
use Bluemmb\Faker\PicsumPhotosProvider;

class ProductFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Faker\Factory::create();
        $faker->addProvider(new PicsumPhotosProvider($faker));

        for ($i = 0; $i < 5; $i++) {
            $product = new Product();
            $product->setName($faker->word);
            $product->setUnitPrice($faker->randomFloat(2, 10, 100));
            $urlImage = $faker->imageUrl(1080, 720);
            $product->setImage($urlImage);
            $product->setCreatedAt(new DateTimeImmutable());
            $manager->persist($product);
        }

        $manager->flush();
    }
}
