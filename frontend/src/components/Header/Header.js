import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize='large' />
            </IconButton>
                
            <IconButton>
                <img src="logo192.png" height="35" alt="logo" />
            </IconButton>

            <IconButton>
                <ForumIcon fontSize='large' />
            </IconButton>
        </div>
    );
}

export default Header;