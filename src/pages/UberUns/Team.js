import React from "react";
import { TeamList } from "../../helpers/TeamList";
import TeamItem from "../../components/TeamItem";
import "../../styles/Team.css";
import Navbar2 from "../../components/Navbar2"
import Gallerie from "../../components/Gallerie"


function Team() {

  React.useEffect(() => {
    HeaderChange();
  });
  return (
    <>

      <div className="Team" id="Team">
        <div className="teamList">
          {TeamList.map((teamItem, key) => {
            return (
              <>
                <TeamItem
                  key={key}
                  image={teamItem.image}
                  bereich={teamItem.bereich}
                  name={teamItem.name}
                  text={teamItem.text}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

function HeaderChange() {
  var el = document.querySelector('#GallerieHeaderId');
  el.innerHTML = 'Das Team';
  if (window.location.pathname == "/Team") {
    document.getElementsByClassName('slick-dots')[0].setAttribute('style', 'display: none !important;');
    el.setAttribute('style', '    font-size: 3rem; color: #fff !important; height: auto !important; width: fit-content; margin: auto; text-shadow: 0px 0px 10px rgb(0 0 0 / 61%);')
  }

}

export default Team;