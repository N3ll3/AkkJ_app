<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Bgame;
use App\Form\AddBgameFormType;
use App\Repository\BgameRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use InvalidArgumentException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class BgameController extends AbstractController
{
    /**
     * @Route("/admin/addBgame", name="add_bgame")
     * @Route("/admin/modifyBgame/{id}", name="modify_bgame")
     * 
     */
    public function addBgameForm(Bgame $bgame = null, Request $request, ObjectManager $manager, BgameRepository $repo)
    {
        if (!$bgame) {
            $bgame = new Bgame();
        }

        $addForm = $this->createForm(AddBgameFormType::class, $bgame);

        $addForm->handleRequest($request);

        if ($addForm->isSubmitted() && $addForm->isValid()) {

            $imgFile = $addForm['image_perso']->getData();

            if ($imgFile) {
                $originalFilename = pathinfo($imgFile->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
                $newFilename = $safeFilename . '-' . uniqid() . '.' . $imgFile->guessExtension();

                try {
                    $imgFile->move(
                        $this->getParameter('img_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                }
                $bgame->setImagePerso($newFilename);
            }
            $manager->persist($bgame);
            $manager->flush();
            return $this->redirectToRoute('list_bgames');
        }

        return $this->render('add_bgame/addBgame.html.twig', [
            'addForm' => $addForm->createView(),
            'bgameExist' => false,
            'edit' => $bgame->getId() !== null,
            'bgame' => $bgame
        ]);
    }

    /**
     * @Route("/admin/list-bgames/{page}", name="list_bgames")
     * 
     */

    public function listBgames(BgameRepository $bgamesRepo, $page)
    {

        if (!is_numeric($page)) {
            throw new InvalidArgumentException(
                'Parameter $page is incorrect (value : ' . $page . ').'
            );
        }

        if ($page < 1) {
            throw new NotFoundHttpException('Page does not exist');
        }

        $bgamePerPage = 7;

        $bgames = $bgamesRepo->findBgame($page, $bgamePerPage);

        $pagination = [
            'page' => $page,
            'nbPages' => ceil(count($bgames) / $bgamePerPage),
            'route' => 'list_bgames',
            'paramsRoute' => []
        ];

        return $this->render('list_games/myludo.html.twig', [
            'bgames' => $bgames,
            'pagination' => $pagination
        ]);
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
     * @Route("/admin/delete/{id}", options={"expose"= true}, name="delete_bgame")
     */

    public function deleteBgame(BgameRepository $bgamesRepo, Request $request)
    {
        $deletedBgame = $bgamesRepo->deleteBgame($request->get('id'));

        if ($deletedBgame) {
            return new JsonResponse(['msg' => 'Bgame deleted', "response" => $deletedBgame]);
        } else {
            return new JsonResponse(['msg' => 'Fail', "response" => $deletedBgame]);
        }
    }

    /**
     * @Route("/admin/delete/image/{id}", options={"expose"= true}, name="delete_image_bgame")
     */

    public function deleteImagePerso(BgameRepository $bgamesRepo, Request $request)
    {
        $deletedImage = $bgamesRepo->deleteImagePerso($request->get('id'));
        if ($deletedImage) {
            return new JsonResponse(['msg' => 'Image deleted', "response" => $deletedImage]);
        } else {
            return new JsonResponse(['msg' => 'Fail', "response" => $deletedImage]);
        }
    }



    public function searchByName(BgameRepository $bgamesRepo, Request $request) {
        $bgame = $bgamesRepo->getByName($request->get('search')); 
        
    }
}