<?php

namespace Geekbrains\Application1\Application;

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

class ViewRenderer {

    private string $templateDirectory = '/src/Domain/Views/';
    private FilesystemLoader $twigLoader;
    private Environment $twigEnvironment;

    public function __construct(){
        $this->twigLoader = new FilesystemLoader($_SERVER['DOCUMENT_ROOT'] . '/../' . $this->templateDirectory);
        $this->twigEnvironment = new Environment($this->twigLoader, [
            // Уберите закомментированную строку, если кэш не нужен
            // 'cache' => $_SERVER['DOCUMENT_ROOT'].'/../cache/',
        ]);
    }

    public function renderTemplate(string $templateName = 'page-index.tpl', array $variables = []): string {
        $mainTemplate = $this->twigEnvironment->load('main.tpl');
        
        $variables['content_template'] = $templateName; // Изменили название ключа

        if (isset($_SESSION['user_name'])) {
            $variables['is_user_logged_in'] = true; // Переименовали переменную
        }
 
        return $mainTemplate->render($variables);
    }

    public function renderTemplateWithCSRF(string $templateName = 'page-index.tpl', array $variables = []): string {
        // Генерируем CSRF токен и сохраняем в сессии
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        
        // Добавление CSRF токена в переменные шаблона
        $variables['csrf_token'] = $_SESSION['csrf_token'];
 
        return $this->renderTemplate($templateName, $variables);
    }

    public function renderPartialTemplate(string $templateName, array $variables = []): string {
        $partialTemplate = $this->twigEnvironment->load($templateName);
        
        if (isset($_SESSION['user_name'])) {
            $variables['is_user_logged_in'] = true; // Переименовали переменную
        }
 
        return $partialTemplate->render($variables);
    }
}