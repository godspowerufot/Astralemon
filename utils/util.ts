"use client";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

// Set tokens and user_id in cookies for expiration management
export const setTokens = (
  accessToken: string,
  refreshToken: string,
  userId: string
) => {
  // Set refresh token (expires in 7 days)
  Cookies.set("refreshToken", refreshToken);

  // Set access token with manual expiration handling (50 seconds)
  Cookies.set("accessToken", accessToken);
  Cookies.set("userId", userId);
};

// Clear tokens and user_id from cookies and localStorage
export const clearTokens = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  Cookies.remove("userId");
};

// Get access token from cookies
export const getAccessToken = () => {
 
 
  return Cookies.get("accessToken");
};

// Get refresh token from cookies
export const getRefreshToken = () => Cookies.get("refreshToken");

// Get user_id from cookies
export const getUserId = () => Cookies.get("userId");

// Countdown component

