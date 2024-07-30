FROM ruby:3.1.0

ENV APP_ROOT /myapp
RUN mkdir $APP_ROOT
WORKDIR $APP_ROOT
ADD . $APP_ROOT
RUN bundle install
