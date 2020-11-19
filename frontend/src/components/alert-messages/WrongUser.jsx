import React from "react";

//action is delete or update
//dataType is post or comment
export default function WrongUser(action, dataType) {
  return (
    //The following div will be styled in css to display a pop-up alert box
    <div className="wrong-user-alert">
      {/* The following heading will transle into the follwoing message:
            "Only the user who created the post/comment can update/delete it"
            */}
      <h3>
        Only the user who created the {dataType} can {action} it{" "}
      </h3>
    </div>
  );
}
