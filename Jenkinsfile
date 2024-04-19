pipeline {
    agent any
    stages {
        stage('Check Out SCM') {
            steps {
                checkout scm
            }
        }
        
        stage('Test') {
            steps {
                // Install npm dependencies
                bat 'npm install'

                // Run tests
                bat 'npm run test'
                
                echo 'Testing the app'
            }
        }
        
        stage('Build') {
            steps {
                // Build the app
                bat 'npm run build'
            }
        }
    }
}
