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

 4- Création des Pages Object Model
    - créer un repertoire pages
    - y créer les class correspondant à vos pages
    - créer les tests en utilisant les POM

5- Création des tags afin d'executer uniquement certains tags
    - ajouter l'objet { tag: '@smoke', } ou {tag: ['@regression', '@sanity'],} comme parametre de votre test
    - executer vos tests avec la commande npx playwright test --grep @smoke

6- Géneration de rapport
    DOC: https://playwright.dev/docs/test-reporters
    - à titre d'organisation, créez le dossier junit dans playwright-report, on y gardera les rapport de type junit.
    - modifiez le fichier playwright.config.ts en configurant les reporter (reporter: [['junit', { outputFile: 'playwright-report/junit/results.xml' }]],)
    - exécutez vos tests à l'aide de cette commande (si vous utilisez --reporter=junit): PLAYWRIGHT_JUNIT_OUTPUT_NAME=playwright-report/junit/results.xml npx playwright test --reporter=junit (PLAYWRIGHT_JUNIT_OUTPUT_NAME est une variable d'environnement)
    - ou simplement npx playwright test, le fichier sera créer selon { outputFile: 'playwright-report/junit/results.xml' }
    - vous devriez trouver à la racine de votre projet un fichier results.xml

    Allure:
    DOC1: https://github.com/allure-framework/allure-js/tree/main/packages/allure-playwright
    DOC2: 
    - installer allure-playwright via la commande npm install -D allure-playwright
    - modifier le fichier playwright.conf.ts comme suit reporter: "allure-playwright", ou reporter: [["line"], ["allure-playwright"]], si on choisit plusieurs reporter.
    - executez vos tests avec la commande npx playwright test --reporter=allure-playwright
    - un nouveau dossier allure-results devrait apparaitre avec des fichiers *.json
    - pour visualiser les rapport allure vous devrez d'abord installer un outil de generation et de visualisation dont la doc est fourni sur le lien DOC2, suite à ça, vous pourrez génerer vos rapports avec la commande allure generate ./allure-results -o ./allure-report, puis allure open ./allure-report.
