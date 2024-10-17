Magento community-edition:2.4.6 

Installation guide
https://www.cloudways.com/blog/install-magento-2-composer/



bin/magento sampledata:deploy 
bin/magento module:disable Magento_TwoFactorAuth Magento_AdminAdobeImsTwoFactorAuth
bin/magento setup:upgrade
bin/magento setup:di:compile 
bin/magento setup:static-content:deploy -f 
find var generated pub/static pub/media app/etc -type f -exec chmod 664 {} \;      
find var generated pub/static pub/media app/etc -type d -exec chmod 775 {} \;
chmod u+x bin/magento
bin/magento indexer:reindex  
bin/magento cache:clean
