import fetch from 'isomorphic-fetch';

export function create_reservation(reservation) {
  return fetch(`/reservations/`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(reservation)
    })
    .then(response => response.json())
    .catch(error => { error });
}