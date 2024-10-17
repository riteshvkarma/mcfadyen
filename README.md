Magento Guide




composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition:2.4.6 vpsmage

cd vpsmage


bin/magento setup:install \                                                        
--base-url=http://vpsmage.local \
--db-host=localhost \
--db-name=vpsmage \
--db-user=root \
--db-password=Ritesh@24 \
--admin-firstname=Admin \
--admin-lastname=Admin \
--admin-email=admin@example.com \
--admin-user=admin \
--admin-password=admin123 \
--language=en_US \
--currency=USD \
--timezone=America/New_York \
--use-rewrites=1

chmod -R 775 var pub generated

bin/magento sampledata:deploy 
bin/magento module:disable Magento_TwoFactorAuth Magento_AdminAdobeImsTwoFactorAuth
bin/magento setup:upgrade
bin/magento setup:di:compile 
bin/magento setup:static-content:deploy -f 
find var generated pub/static pub/media app/etc -type f -exec chmod 664 {} \;      
find var generated pub/static pub/media app/etc -type d -exec chmod 775 {} \;
chmod u+x bin/magento
vpsmage % bin/magento indexer:reindex  
bin/magento cache:clean
