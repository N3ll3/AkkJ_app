<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Form\FilterType;
use App\Repository\BgameRepository;
use App\Entity\Filter;


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
     * @Route("/simpleSearch", name="simple_search")
     *
     * @param BgameRepository $bgameRepo
     * @param Request $request
     * @return void
     */
    public function searchOneGame(BgameRepository $bgameRepo, Request $request)
    {
        $bgame = $bgameRepo->getByName($request->get('search'));
     }
}
