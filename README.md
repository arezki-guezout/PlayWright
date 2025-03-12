1- Installation de NodeJS
    sudo apt install nodejs
2- Installation de Playwright
    - SUR VSCODE (recommendé): 
    - Ctrl+Shift+P => install playwright => décocher la case concernant git => OK
    - SUR TERMINAL (à éviter):
    - npm init playwright@latest
    - laisser les valeurs par défaut pour toutes les questions posées (tapez Entrer)
    - npx playwright install --with-deps chromium firefox webkit
3- Création d'un premier test
    - les tests doivent être écrit dans le répertoire tests
    - lancer les tests avec la commande npx playwright test
    *******
    Si les tests sur le navigateur Webkit échouent, alors commenter le bloc relatif à webkit dans la section projects dans le fichier playwright.config.ts
    *******
    - Vérifier le rapport index.html qui se trouve dans playwright-report (ouvrir avec un navigateur)
