// This file serves as a central export point for all asset imports
// It allows for easier management and importing of assets throughout the project

// Import SVG icons
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import close from "./close.svg";
import menu from "./menu.svg";

// Import image assets
import imgPlaceholder from "./imgPlaceholder.png";
import sttAvatar from "./sttAvatar.jpg";

// Export all imported assets
// This allows other files to import multiple assets in a single line, e.g.:
// import { menu, close, github, linkedin, imgPlaceholder, sttAvatar } from '../assets/exportAssets';
export { menu, close, github, linkedin, imgPlaceholder, sttAvatar };