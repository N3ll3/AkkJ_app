<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Form\FilterType;
use App\Repository\BgameRepository;
use App\Entity\Filter;
use App\Entity\Bgame;


class AkkJController extends AbstractController
{
    /**
     * @Route("/", name="akkj")
     */
    public function akkj(BgameRepository $bgameRepo, Request $request)
    {

        $filter = new Filter();

        $filterForm = $this->createForm(FilterType::class, $filter);
        $filterForm->handleRequest($request);

        $bgamesFind = $bgameRepo->findBgameByFilter($filter);

        if (!$bgamesFind) {
            return $this->render('akkj/akkj.html.twig', [
                'filterForm' => $filterForm->createView(),
                'bgamesFind' => false
            ]);
        } else {
            return $this->render('akkj/akkj.html.twig', [
                'filterForm' => $filterForm->createView(),
                'bgames' => $bgamesFind,
                'bgamesFind' => true
            ]);
        }
    }

    /**
     * @Route("/show/{id}", name="show_one_bgame")
     */
    public function showOneBgame(Bgame $bgame)
    {
        return $this->render('show_one_bgame/showOneBgame.html.twig', [
            'bgame' => $bgame
        ]);
    }

    /**
     * @Route("/simpleSearch", name="simple_search")
     *
     * 
     */
    public function searchOneGame(BgameRepository $bgameRepo, Request $request)
    {
        $search = "%" . $request->request->get('search') . "%";;
      
        $bgame = $bgameRepo->findByName($search2);

        dump($bgame);
        exit;

        return $this->render('show_one_bgame/showOneBgame.html.twig', [
            'bgame' => $bgame[0]
        ]);
    }
}
