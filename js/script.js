// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tim Brady
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)
  const radius = params.get("r")

  document.getElementById("radius").innerHTML =
    "The radius is: " + radius + " cm."

  const volume = (4.0 * Math.PI * radius ** 3) / 3.0
  document.getElementById("volume-of-sphere").innerHTML =
    "The volume of the sphere is: " + volume.toFixed(2) + " cm³."
}
