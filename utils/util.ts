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
  Cookies.set("refreshToken", refreshToken, { expires: 7 });

  // Set access token with manual expiration handling (50 seconds)
  const expiresAt = new Date().getTime() + 50 * 1000; // 50 seconds from now
  Cookies.set("accessToken", accessToken);
  Cookies.set("userId", userId);
  localStorage.setItem("accessTokenExpiry", expiresAt.toString());
};

// Clear tokens and user_id from cookies and localStorage
export const clearTokens = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  Cookies.remove("userId");
  localStorage.removeItem("accessTokenExpiry");
};

// Get access token from cookies
export const getAccessToken = () => {
  const expiry = localStorage.getItem("accessTokenExpiry");
  if (expiry && new Date().getTime() > parseInt(expiry)) {
    console.log("Access token has expired");
    clearTokens(); // Token has expired, clear it
    return null;
  }
  return Cookies.get("accessToken");
};

// Get refresh token from cookies
export const getRefreshToken = () => Cookies.get("refreshToken");

// Get user_id from cookies
export const getUserId = () => Cookies.get("userId");

// Countdown component

