export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('bearerToken')}`
    }
};

// export const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmM1OWJkNDI3NmM5ZGE5ZDQwZGEzZjI4OTkzNTFiMCIsIm5iZiI6MTcyNTgyNTc1Mi40ODQ3NCwic3ViIjoiNjZjZjkxNWVlMDJhYzAzMzUxNzIyYmExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VOYjilYRcEld2k1tvCPYZVkBY3gmHEiyAl5o_N4tGP8'
//     }
// };

// console.log(localStorage.getItem('bearerToken'))