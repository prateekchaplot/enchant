import IconButton from "@mui/material/IconButton";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";

import "./SwipeButtons.css";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__replay">
        <ReplayIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__close">
        <CloseIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__fav">
        <FavoriteIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
