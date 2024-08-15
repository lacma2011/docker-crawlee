FROM bubbam2006/nvmyarn:20.12.2

# Set the working directory
WORKDIR /usr/src

# Install Playwright
USER nvm
RUN bash -c "source /home/nvm/.nvm/nvm.sh && nvm use 20.12.2 && npx playwright install"
RUN bash -c "source /home/nvm/.nvm/nvm.sh && nvm use 20.12.2 && npx playwright install-deps"

#RUN bash -c "npm install playwright"

# Command to keep the container running
#CMD ["source /home/nvm/.nvm/nvm.sh && nvm use 20.12.2 && /bin/bash"]