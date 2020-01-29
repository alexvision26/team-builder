import React from "react";
import TeamMember from './TeamMember';

const TeamList = props => {
    const team = props.team;
    console.log(team)
    return (
        <div>
            <h2>Developers: </h2>
            <div>
                {team.map(p => (
                    <div className='team-card'>
                       <h2>Name: {p.name}</h2>
                       <h4>Role: {p.role}</h4>
                       <h4>Email: {p.email}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default TeamList;