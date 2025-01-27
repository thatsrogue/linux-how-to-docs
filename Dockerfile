FROM node:latest 
WORKDIR /usr/app
COPY index.js /usr/app/index.js
COPY public/ /usr/app/public/
COPY guidesmd /usr/app/guidesmd/
COPY htmltemplate-post /usr/app/
COPY htmltemplate-pre /usr/app/
RUN npm install express remarkable
EXPOSE 20203
CMD ["node", "index.js"]

