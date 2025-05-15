/**
 * Utility function for smooth scrolling to elements
 */

export const smoothScrollTo = (elementId) => {
  // Remove the # if it's included
  const targetId = elementId.startsWith('#') ? elementId.substring(1) : elementId;
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Offset for navbar height
      behavior: 'smooth'
    });
  }
};
