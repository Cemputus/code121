import apiClient from "@/config/apiClient";
import axios from 'axios';

const login = async (email, password) => {
    try {
        const response = await apiClient.post('/users/login', { email, password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
    }

const register = async (userData) => {
    try {
        const response = await apiClient.post('/users/register', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

const addbabysitter = async (babysitterData) => {
    try {
        const response = await apiClient.post('/users/babysitter', babysitterData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

