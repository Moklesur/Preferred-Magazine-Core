<?php
/*
Plugin Name: Preferred Magazine Core
Plugin URI: https://themetim.com/
Description: Preferred Magazine core contains all the functionality of Preferred Magazine theme.
Author: themetim
Author URI: https://themetim.com
Version: 1.0.0
*/

if ( ! defined( 'ABSPATH' ) ) exit;
define( 'PREFERRED_MAGAZINE_VERSION', '1.0.0' );
define( 'PREFERRED_MAGAZINE_PLUG_DIR', dirname(__FILE__).'/' );
define('PREFERRED_MAGAZINE_PLUG_URL', plugin_dir_url(__FILE__));

function preferred_magazine_framework_init_check() {
    require_once PREFERRED_MAGAZINE_PLUG_DIR .'includes/index.php';
}
add_action( 'plugins_loaded', 'preferred_magazine_framework_init_check' );

?>