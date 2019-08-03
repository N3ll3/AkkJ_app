<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Bgame;
use App\Entity\Category;
use App\Entity\Difficulty;
use App\Entity\Theme;
use App\Entity\Mechanism;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateIntervalType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

class AddBgameController extends AbstractController
{
    /**
     * @Route("/addBgame", name="add_bgame")
     */
    public function addBgameForm(Request $request, ObjectManager $manager)
    {
        $bgame = new Bgame();
        $addForm = $this->createFormBuilder($bgame)
            ->add('Name')
            ->add('description')
            ->add(
                'Difficulty',
                EntityType::class,
                [
                    'class' => Difficulty::class,
                    'choice_label' => 'name',
                ]
            )
            ->add(
                'duration',
                IntegerType::class
            )
            ->add(
                'minNbPlayers',
                NumberType::class,
                [
                    'html5' => true,
                ]
            )
            ->add(
                'maxNbPlayers',
                NumberType::class,
                [
                    'html5' => true,
                ]
            )
            ->add(
                'Theme',
                EntityType::class,
                [
                    'class' => Theme::class,
                    'choice_label' => 'name',

                ]
            )
            ->add(
                'Category',
                EntityType::class,
                [
                    'class' => Category::class,
                    'choice_label' => 'name',
                    'multiple' => true,
                    'expanded' => true,
                ]
            )
            ->add(
                'Mechanism',
                EntityType::class,
                [
                    'class' => Mechanism::class,
                    'choice_label' => 'name',
                    'multiple' => true,
                    'expanded' => true,
                ]
            )
            ->add('Ajouter', SubmitType::class)
            ->getForm();

        $addForm->handleRequest($request);

        if ($addForm->isSubmitted() && $addForm->isValid()) {
            $manager->persist($bgame);
            $manager->flush();

            return $this->redirectToRoute('list_bgames');
        }

        return $this->render('add_bgame/addBgame.html.twig', [
            'addForm' => $addForm->createView()
        ]);
    }

    /**
     *
     *@Route("/addBGGbgame", name="add_BGG_bgame")
     */

    public function addGameFromBGG(){

        return $this->render('add_bgame/addBGGame.html.twig');

    }

}

