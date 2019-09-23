<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Bgame;
use App\Form\AddBgameFormType;
use App\Repository\BgameRepository;


class AddBgameController extends AbstractController
{
    /**
     * @Route("/admin/addBgame", name="add_bgame")
     */
    public function addBgameForm(Request $request, ObjectManager $manager, BgameRepository $repo)
    {

        $bgame = new Bgame();

        $addForm = $this->createForm(AddBgameFormType::class, $bgame);

        $addForm->handleRequest($request);

        if ($addForm->isSubmitted() && $addForm->isValid()) {
            $bgameName = $bgame->getName();
            $bgameVerif = $repo->findOneBy(['name' => $bgameName]);
            if (!$bgameVerif) {
                $manager->persist($bgame);
                $manager->flush();
                return $this->redirectToRoute('list_bgames');
            } else {
                return $this->render('add_bgame/addBgame.html.twig', [
                    'addForm' => $addForm->createView(),
                    'bgameName' => $bgameName,
                    'bgameExist' => true
                ]);
            }
        }

        return $this->render('add_bgame/addBgame.html.twig', [
            'addForm' => $addForm->createView(),
            'bgameExist' => false
        ]);
    }
}
