delay=5s
sleep $delay
echo "###### REPLACEME  ######"
echo "################################"
pwd
echo "###### GIT Status ######"
git status
echo "###### Pull Latest Code ######"
git pull
echo "###### Install Dependencies ######"
npm install
echo "###### Compile ######"
tsc
echo "################################"
pm2 list
cd ..
echo "##### Stopping App Server Now #####"
pm2 stop deploy-odek.json --only REPLACEME
sleep $delay
echo "##### Deploying REPLACEME on $1 environment #####"
pm2 start deploy-odek.json --only REPLACEME --env $1
sleep $delay
pm2 list
