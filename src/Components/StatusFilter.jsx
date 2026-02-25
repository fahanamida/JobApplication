import React from 'react';

function StatusFilter({ setStatusFilter }) {
  return (
    <select
      className="border p-2 rounded"
      onChange={(e) => setStatusFilter(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Pending">Pending</option>
      <option value="Submitted">Submitted</option>
      <option value="Interview">Interview</option>
    </select>
  )
}

export default StatusFilter;