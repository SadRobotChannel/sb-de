(function() {
  /*
  Simple effect for roll over on grids, where the content slides based on the previous position.

  You can see also in use here: http://worldbakingday.com

  Libraries: jQuery and jQuery.transit
  */
  $(function() {
    var columns, current, easing, grid, hideItem, showItem, time;
    grid = $(".grid");
    current = {
      index: -1,
      column: 0,
      line: 0
    };
    columns = 10;
    easing = "cubic-bezier(0.165, 0.840, 0.440, 1.000)";
    time = 400;
    grid.on("mouseenter", "a", (e) => {
      var column, el, image, index, info, item, line;
      el = $(e.currentTarget);
      info = el.find(".info");
      image = el.find("img");
      index = el.parent().index();
      column = index % columns;
      line = Math.floor(index / columns);
      console.log(index, column, line);
      item = {
        el: el,
        index: index,
        column: column,
        line: line,
        info: info,
        image: image
      };
      
      // stop if the 
      if (current.el && current.index === index) {
        return;
      }
      if (line === current.line && column > current.column) {
        showItem(item, "-100%", 0, "25%", 0);
        hideItem(current, "100%", 0, "-25%", 0);
      } else if (line === current.line && column < current.column) {
        showItem(item, "100%", 0, "-25%", 0);
        hideItem(current, "-100%", 0, "25%", 0);
      } else if (line > current.line && column === current.column) {
        showItem(item, 0, "-100%", 0, "25%");
        hideItem(current, 0, "100%", 0, "-25%");
      } else {
        showItem(item, 0, "100%", 0, "-25%");
        hideItem(current, 0, "-100%", 0, "25%");
      }
      return current = item;
    });
    showItem = function(item, infoX, infoY, imageX, imageY) {
      item.info.stop().css({
        x: infoX,
        y: infoY,
        display: "block"
      }).transition({
        x: 0,
        y: 0,
        duration: time,
        easing: easing
      });
      return item.image.stop().transition({
        x: imageX,
        y: imageY,
        opacity: .5,
        duration: time,
        easing: easing
      });
    };
    return hideItem = function(item, infoX, infoY, imageX, imageY) {
      if (!item.el) {
        return;
      }
      item.info.stop().transition({
        x: infoX,
        y: infoY,
        duration: time,
        easing: easing
      });
      return item.image.stop().css({
        x: imageX,
        y: imageY,
        opacity: .5
      }).transition({
        x: 0,
        y: 0,
        opacity: 1,
        duration: time,
        easing: easing
      });
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTs7Ozs7OztFQVFBLENBQUEsQ0FBRSxRQUFBLENBQUEsQ0FBQTtBQUNBLFFBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUE7SUFBQSxJQUFBLEdBQU8sQ0FBQSxDQUFFLE9BQUY7SUFDUCxPQUFBLEdBQVU7TUFBQSxLQUFBLEVBQU0sQ0FBQyxDQUFQO01BQVUsTUFBQSxFQUFPLENBQWpCO01BQW9CLElBQUEsRUFBSztJQUF6QjtJQUVWLE9BQUEsR0FBVTtJQUNWLE1BQUEsR0FBUztJQUNULElBQUEsR0FBTztJQUVQLElBQUksQ0FBQyxFQUFMLENBQVEsWUFBUixFQUFzQixHQUF0QixFQUEyQixDQUFDLENBQUQsQ0FBQSxHQUFBO0FBQ3pCLFVBQUEsTUFBQSxFQUFBLEVBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7TUFBQSxFQUFBLEdBQUssQ0FBQSxDQUFFLENBQUMsQ0FBQyxhQUFKO01BQ0wsSUFBQSxHQUFPLEVBQUUsQ0FBQyxJQUFILENBQVEsT0FBUjtNQUNQLEtBQUEsR0FBUSxFQUFFLENBQUMsSUFBSCxDQUFRLEtBQVI7TUFDUixLQUFBLEdBQVEsRUFBRSxDQUFDLE1BQUgsQ0FBQSxDQUFXLENBQUMsS0FBWixDQUFBO01BQ1IsTUFBQSxHQUFTLEtBQUEsR0FBUTtNQUNqQixJQUFBLEdBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxLQUFBLEdBQVEsT0FBbkI7TUFDUCxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosRUFBbUIsTUFBbkIsRUFBMkIsSUFBM0I7TUFDQSxJQUFBLEdBQU87UUFBQSxFQUFBLEVBQUcsRUFBSDtRQUFPLEtBQUEsRUFBTSxLQUFiO1FBQW9CLE1BQUEsRUFBTyxNQUEzQjtRQUFtQyxJQUFBLEVBQUss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QUEsRUFBUTtNQUE1QixDQUF0QixDQUFxRCxDQUFDLFVBQXRELENBQWlFO1FBQUEsQ0FBQSxFQUFFLENBQUY7UUFBSyxDQUFBLEVBQUUsQ0FBUDtRQUFVLE9BQUEsRUFBUSxDQUFsQjtRQUFxQixRQUFBLEVBQVMsSUFBOUI7UUFBb0MsTUFBQSxFQUFPO01BQTNDLENBQWpFO0lBSFM7RUF4Q1gsQ0FBRjtBQVJBIiwic291cmNlc0NvbnRlbnQiOlsiIyMjXG5TaW1wbGUgZWZmZWN0IGZvciByb2xsIG92ZXIgb24gZ3JpZHMsIHdoZXJlIHRoZSBjb250ZW50IHNsaWRlcyBiYXNlZCBvbiB0aGUgcHJldmlvdXMgcG9zaXRpb24uXG5cbllvdSBjYW4gc2VlIGFsc28gaW4gdXNlIGhlcmU6IGh0dHA6Ly93b3JsZGJha2luZ2RheS5jb21cblxuTGlicmFyaWVzOiBqUXVlcnkgYW5kIGpRdWVyeS50cmFuc2l0XG4jIyNcblxuJCAtPlxuICBncmlkID0gJCBcIi5ncmlkXCJcbiAgY3VycmVudCA9IGluZGV4Oi0xLCBjb2x1bW46MCwgbGluZTowXG4gIFxuICBjb2x1bW5zID0gMTBcbiAgZWFzaW5nID0gXCJjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApXCJcbiAgdGltZSA9IDQwMFxuICAgIFxuICBncmlkLm9uIFwibW91c2VlbnRlclwiLCBcImFcIiwgKGUpID0+XG4gICAgZWwgPSAkIGUuY3VycmVudFRhcmdldFxuICAgIGluZm8gPSBlbC5maW5kIFwiLmluZm9cIlxuICAgIGltYWdlID0gZWwuZmluZCBcImltZ1wiXG4gICAgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpXG4gICAgY29sdW1uID0gaW5kZXggJSBjb2x1bW5zXG4gICAgbGluZSA9IE1hdGguZmxvb3IoaW5kZXggLyBjb2x1bW5zKVxuICAgIGNvbnNvbGUubG9nIGluZGV4LCBjb2x1bW4sIGxpbmVcbiAgICBpdGVtID0gZWw6ZWwsIGluZGV4OmluZGV4LCBjb2x1bW46Y29sdW1uLCBsaW5lOmxpbmUsIGluZm86aW5mbywgaW1hZ2U6aW1hZ2VcbiAgICBcbiAgICAjIHN0b3AgaWYgdGhlIFxuICAgIHJldHVybiBpZiBjdXJyZW50LmVsIGFuZCBjdXJyZW50LmluZGV4IGlzIGluZGV4XG4gIFxuICAgIGlmIGxpbmUgPT0gY3VycmVudC5saW5lIGFuZCBjb2x1bW4gPiBjdXJyZW50LmNvbHVtblxuICAgICAgc2hvd0l0ZW0gaXRlbSwgXCItMTAwJVwiLCAwLCBcIjI1JVwiLCAwXG4gICAgICBoaWRlSXRlbSBjdXJyZW50LCBcIjEwMCVcIiwgMCwgXCItMjUlXCIsIDBcbiAgICBlbHNlIGlmIGxpbmUgPT0gY3VycmVudC5saW5lIGFuZCBjb2x1bW4gPCBjdXJyZW50LmNvbHVtblxuICAgICAgc2hvd0l0ZW0gaXRlbSwgXCIxMDAlXCIsIDAsIFwiLTI1JVwiLCAwXG4gICAgICBoaWRlSXRlbSBjdXJyZW50LCBcIi0xMDAlXCIsIDAsIFwiMjUlXCIsIDBcbiAgICBlbHNlIGlmIGxpbmUgPiBjdXJyZW50LmxpbmUgYW5kIGNvbHVtbiA9PSBjdXJyZW50LmNvbHVtblxuICAgICAgc2hvd0l0ZW0gaXRlbSwgMCwgXCItMTAwJVwiLCAwLCBcIjI1JVwiXG4gICAgICBoaWRlSXRlbSBjdXJyZW50LCAwLCBcIjEwMCVcIiwgMCwgXCItMjUlXCJcbiAgICBlbHNlXG4gICAgICBzaG93SXRlbSBpdGVtLCAwLCBcIjEwMCVcIiwgMCwgXCItMjUlXCJcbiAgICAgIGhpZGVJdGVtIGN1cnJlbnQsIDAsIFwiLTEwMCVcIiwgMCwgXCIyNSVcIlxuICBcbiAgICBjdXJyZW50ID0gaXRlbVxuICBcbiAgc2hvd0l0ZW0gPSAoaXRlbSwgaW5mb1gsIGluZm9ZLCBpbWFnZVgsIGltYWdlWSkgLT5cbiAgICBpdGVtLmluZm8uc3RvcCgpLmNzcyh4OmluZm9YLCB5OmluZm9ZLCBkaXNwbGF5OlwiYmxvY2tcIikudHJhbnNpdGlvbiB4OjAsIHk6MCwgZHVyYXRpb246dGltZSwgZWFzaW5nOmVhc2luZ1xuICAgIGl0ZW0uaW1hZ2Uuc3RvcCgpLnRyYW5zaXRpb24geDppbWFnZVgsIHk6aW1hZ2VZLCBvcGFjaXR5Oi41LCBkdXJhdGlvbjp0aW1lLCBlYXNpbmc6ZWFzaW5nXG4gIFxuICBoaWRlSXRlbSA9IChpdGVtLCBpbmZvWCwgaW5mb1ksIGltYWdlWCwgaW1hZ2VZKSAtPlxuICAgIHJldHVybiB1bmxlc3MgaXRlbS5lbFxuICAgIGl0ZW0uaW5mby5zdG9wKCkudHJhbnNpdGlvbiB4OmluZm9YLCB5OmluZm9ZLCBkdXJhdGlvbjp0aW1lLCBlYXNpbmc6ZWFzaW5nXG4gICAgaXRlbS5pbWFnZS5zdG9wKCkuY3NzKHg6aW1hZ2VYLCB5OmltYWdlWSwgb3BhY2l0eTouNSkudHJhbnNpdGlvbiB4OjAsIHk6MCwgb3BhY2l0eToxLCBkdXJhdGlvbjp0aW1lLCBlYXNpbmc6ZWFzaW5nIl19
//# sourceURL=coffeescript