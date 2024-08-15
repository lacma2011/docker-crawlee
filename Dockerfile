FROM bubbam2006/nvmyarn:20.12.2

# Set the working directory
WORKDIR /usr/src

# Install Playwright
USER root
RUN bash -c "source /home/nvm/.nvm/nvm.sh && nvm use 20.12.2 && npx playwright install"
USER nvm

#RUN bash -c "npm install playwright"

# Command to keep the container running
#CMD ["source /home/nvm/.nvm/nvm.sh && nvm use 20.12.2 && /bin/bash"]