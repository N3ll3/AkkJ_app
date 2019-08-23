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
use App\Form\AddBgameFormType;
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

        $addForm = $this->createForm(AddBgameFormType::class, $bgame);

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

}
