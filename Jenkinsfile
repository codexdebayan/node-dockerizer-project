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

        stage('Build-Image'){
            steps{
                bat 'docker build -t my-node-app:1.0 .'
            }
        }

        stage ('Push-Image'){
            steps{
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    bat "docker login -u $USERNAME -p $PASSWORD"
                    bat 'docker tag my-node-app:1.0 $USERNAME/my-node-app:1.0'
                    bat 'docker push $USERNAME/my-node-app:1.0'
                    bat 'docker logout'
                }
            }
        }
    }
}
