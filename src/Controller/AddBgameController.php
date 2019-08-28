<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Bgame;
use App\Form\AddBgameFormType;
use Symfony\Component\HttpFoundation\JsonResponse;

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
