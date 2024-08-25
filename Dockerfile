FROM bubbam2006/nvmyarn:20.12.2

# Set the working directory
WORKDIR /usr/src

# Install Playwright
USER nvm
RUN bash -c "source /home/nvm/.nvm/nvm.sh && nvm use 20.12.2 && npx playwright install"
RUN bash -c "source /home/nvm/.nvm/nvm.sh && nvm use 20.12.2 && npx playwright install-deps"

COPY docker-entrypoint.sh /
ENTRYPOINT [ "/docker-entrypoint.sh" ]
