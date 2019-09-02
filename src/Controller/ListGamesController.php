<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\BgameRepository;


class ListGamesController extends AbstractController
{
    /**
     * @Route("/list-bgames", name="list_bgames")
     */

    public function listBgames(BgameRepository $bgamesRepo, Request $request)
    {
        $allBgames = $bgamesRepo->findAll();

        return $this->render('list_games/myludo.html.twig', [
            'bgames' => $allBgames
        ]);
    }
}
