<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\UserType;
use App\Entity\User;
use App\Form\LoginType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class RegisterController extends AbstractController
{
    /**
     * @Route("/admin/register", name="registration")
     */
    public function registerAction(Request $request, UserPasswordEncoderInterface $passwordEncoder,  ObjectManager $manager)
    {

        $user = new User();
        $form = $this->createForm(UserType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $password = $passwordEncoder->encodePassword($user, $user->getPassword());
            $user->setPassword($password);

            $role = $user->getRoles();
            dump($role);

            if ($role[0] == 'ROLE_ADMIN') {
                $user->setRoles(["ROLE_ADMIN", "ROLE_USER"]);
            } elseif ($role[0] == 'ROLE_USER') {
                $user->setRoles(['ROLE_USER']);
            }

            $manager->persist($user);
            $manager->flush();

            $this->addFlash('success', 'New member add.');

            return $this->redirectToRoute('myaccount');
        }

        return $this->render(
            'security/registration.html.twig',
            [
                'form' => $form->createView(),
                'admin' => true
            ]
        );
    }
}
