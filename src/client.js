import {createClient}  from "@sanity/client";
export default createClient({
    projectId: "00v2934v",
    apiVersion: '2021-10-21',
    useCdn: false,
    dataset: "production"
})