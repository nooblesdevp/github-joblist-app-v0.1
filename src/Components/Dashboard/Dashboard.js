import React, { useEffect } from "react";
import { MdSearch, MdTune } from "react-icons/md";
import { ACTIONS } from "../../context/reducer";
import { useStateValue } from "../../context/Provider";
import axios from "axios";

import "./Dashboard.scss";
import CardJobs from "../CardJobs/CardJobs";

function Dashboard({ job }) {
  const [{ jobs }, dispatch] = useStateValue();

  const BASE_URL =
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

  useEffect(() => {
    const fetchData = async () => {
      const cancelToken = axios.CancelToken.source();
      await axios
        .get(`${BASE_URL}`, {
          params: { _limit: 7 },
        })
        .then((res) => {
          console.log("res", res);
          dispatch({
            type: ACTIONS.GET_DATA,
            payload: { jobs: res.data.slice(0, 7) },
          });
        })
        .catch((e) => {
          if (axios.isCancel(e)) return alert(e.message);
        });
      return () => {
        cancelToken.cancel();
      };
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1>Lastest Gigs</h1>
        <div className="dashboard__search">
          <div className="dashboard__searchInput">
            <MdSearch className="dashboard__searchIcon" />
            <input
              type="text"
              className="dashboard__input"
              placeholder="search job ..."
            />
          </div>
          <MdTune className="dashboard__filterIcon" />
        </div>
      </div>
      {jobs.map((job) => {
        return <CardJobs key={job.id} job={job} />;
      })}
    </div>
  );
}

export default Dashboard;
