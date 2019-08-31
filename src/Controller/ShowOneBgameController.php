<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Bgame;

class ShowOneBgameController extends AbstractController
{
    /**
     * @Route("/show/{id}", name="show_one_bgame")
     */
    public function showOneBgame(Bgame $bgame)
    {
        return $this->render('show_one_bgame/showOneBgame.html.twig', [
            'bgame' => $bgame
        ]);
    }
}
