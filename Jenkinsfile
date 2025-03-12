pipeline {
    agent {
        docker {
            image: 'mcr.microsoft.com/playwright:v1.51.0-noble'
        }
    }
    stages{
        stage('Run PlayWright Install'){
            steps{
                sh "npm ci"
            }
        }
        stage('Run playwright Tests'){
            steps{
                sh "npx playwright test --reporter=line,allure-playwright"
            }
        }
    }
    post{
        always{
            archiveArtifacts artifacts: "allure-results/*.*"
        }
    }
}