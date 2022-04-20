FROM jekyll/jekyll:4.2.2

WORKDIR /srv/jekyll
ENV PATH ${WORKDIR}/node_modules/.bin:$PATH

ADD Gemfile Gemfile.lock ./
RUN bundle install

ADD package.json yarn.lock ./
RUN yarn install

COPY . ./
