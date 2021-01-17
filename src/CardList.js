import React from "react";
import Card from "./Card";
import "./card_list.css";

const CardList = (props) => {
  const list = props.grantData.map((datum, i) => {
    return (
      <Card
        key={i}
        title={datum.solicitation_title}
        sol_num={datum.solicitation_number}
        program={datum.program}
        phase={datum.phase}
        agency={datum.agency}
        branch={datum.branch}
        year={datum.solicitation_year}
        release_date={datum.release_date}
        open_date={datum.open_date}
        close_date={datum.close_date}
        research_info_link={datum.sbir_solicitation_link}
        paper_info_link={datum.solicitation_agency_url}
        current_status={datum.current_status}
        setFavorite={props.setFavorite}
        favorite={props.favorite}
        allDatum={datum}
        index={i}
        // description={datum.solicitation_topics[0].topic_description}
      />
    );
  });

  return (
    <div className="card-list">
      {/* <h3>Click on the Cards to Export</h3> */}
      {list}
    </div>
  );
};

export default CardList;
