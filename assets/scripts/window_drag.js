$(function() 
{
   var topZIndex = 1;
   var $window; // initialize variable containing selected window
   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; // initialzie positions
   // do stuff when the window header is clicked
   $('.window-header').mousedown(windowGrab);

   // stuff that takes place the moment before the mouse moves
   function windowGrab(event) 
   {
      event.preventDefault();
      // set $window to parent of selected header
      $window = $(this).parent();

      // move clicked window to the top
      $window.css('z-index', ++topZIndex);

      // get mouse position on startup
      pos3 = event.pageX;
      pos4 = event.pageY;
      // stop moving window when mouse released
      $(document).mouseup(windowDrop);
      // move window when mouse moves
      $(document).on('mousemove', windowDrag);
   }

   function windowDrag(event) 
   {
      event.preventDefault();
      // calculate new cursor position
      pos1 = pos3 - event.clientX;
      pos2 = pos4 - event.clientY;
      pos3 = event.clientX;
      pos4 = event.clientY;
      // set elements new position
      offset = $window.offset();
      $window.offset({top: offset.top - pos2, left: offset.left - pos1});
   }
   
   function windowDrop() 
   {
      // remove mousemove event
      $(document).off('mousemove');
   }
});