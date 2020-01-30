import React from "react";

const TeamList = props => {
    const team = props.team;
    console.log(team)
    return (
        <div className='team-content'>
             <h1>The Development Team</h1>
            <h2>Our Developers: </h2>
            <div className='dev-container'>
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