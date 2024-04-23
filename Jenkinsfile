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

        stage('Build-Image') {
            steps {
                // Build Docker image
                bat 'docker build -t my-node-app:2.0 .'
            }
        }

        stage('Push-Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    // Log in to Docker Hub
                    echo 'Logging in to Docker Hub'
                    // bat 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
                    bat "docker login -u codexdebayan -p Cdebayan#2023"

                    // Tag the Docker image
                    bat 'docker tag my-node-app:2.0 "codexdebayan/my-node-app:2.0"'

                    // Push the Docker image to Docker Hub
                    bat 'docker push "codexdebayan/my-node-app:2.0"'

                    // Log out from Docker Hub
                    echo 'Logging out from Docker Hub'
                    bat 'docker logout'
                }
            }
        }
    }
}
