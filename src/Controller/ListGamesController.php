<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\BrowserKit\Request;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Bgame;
use App\Repository\BgameRepository;


class ListGamesController extends AbstractController
{
    /**
     * @Route("/", name="list_bgames")
     */
    public function listBgames(BgameRepository $bgamesRepo )
    {
        $bgames = $bgamesRepo->findAll();




        return $this->render('list_games/myludo.html.twig', [
            'bgames' => $bgames
        ]);
    }
}
