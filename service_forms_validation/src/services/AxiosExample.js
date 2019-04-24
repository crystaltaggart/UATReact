import React from "react";
import axios from "axios";

const serviceName="service/tableName";
const apiEndpoint = process.env.REACT_APP_URL + serviceName;

export function testGet(){
    console.log('Before api endpoint in testGet()');
    const promise= axios.get(apiEndpoint);
    console.log('After api endpoint in testGet()');
}

export async function testGetAsync(){
    console.log('Before api endpoint in testGetAsync()');
    const promise = axios.get(apiEndpoint);
    const response = await promise;
    console.log('After api endpoint in testGetAsync()');
}