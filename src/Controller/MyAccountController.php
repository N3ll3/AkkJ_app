<?php

namespace App\Controller;

use App\Repository\BgameRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;


/**
 * @isGranted("ROLE_ADMIN")
 */

class MyAccountController extends AbstractController
{
    /**
     * @Route("/admin/myaccount", name="my_account")
     */
    public function resumeAdmin(UserRepository $userRepo, BgameRepository $bgameRepo)
    {
        $users = $userRepo->findAllUsers();
        $nbOfUsers = count($users);

        $nbOfBgames = $bgameRepo->countAllBgames();
        $bgame = $bgameRepo->getLastBgame();

        return $this->render('admin/myAccount.html.twig', [
            'users' => $users,
            'nbOfUsers' => $nbOfUsers,
            'nbOfBgames' => $nbOfBgames,
            'bgame' => $bgame
        ]);
    }


    /**
     * @Route("/admin/delete/user/{id}", options={"expose"= true}, name="delete_user")
     */

    public function deleteUser(UserRepository $usersRepo, Request $request)
    {
        $deletedUser = $usersRepo->deleteUser($request->get('id'));

        if ($deletedUser) {
            return new JsonResponse(['msg' => 'User deleted', "response" => $deletedUser]);
        } else {
            return new JsonResponse(['msg' => 'Fail', "response" => $deletedUser]);
        }
    }
}
