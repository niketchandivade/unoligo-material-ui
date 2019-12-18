import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';


const Footer = () => {
    return(
        <div>
            <BottomNavigation>
                <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
            </BottomNavigation>
        </div>
    )
}
export default Footer;
